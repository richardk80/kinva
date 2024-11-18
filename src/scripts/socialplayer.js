document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('social-music-player');
    
    const settings = {
        containerID: container.id,
        audioFilePath: container.getAttribute('data-audio-file-path'),
        xmlFilePath: container.getAttribute('data-xml-file-path'),
        updateInterval: 45000
    };

    class UserInterface {
        constructor(settings) {
            this._settings = settings;
            this._preExtendSettings();
            this._setRoot();
            this._postExtendSettings();
            this.setPauseState();
            this._setupMuteButton();
        }

        _preExtendSettings() {
            this._settings.buttonIconClass = 'mmp-icon';
        }

        _setRoot() {
            this._root = document.getElementById(this._settings.containerID);
        }

        _postExtendSettings() {
            this._buttonIcon = this._root.querySelector(`.${this._settings.buttonIconClass}`);
            this._settings.buttonIconPauseClass = 'fa-pause';
            this._settings.buttonIconPlayClass = 'fa-play';
            this._muteButton = this._root.querySelector('#mute-button');
        }

        setPauseState() {
            this._setButtonPauseState();
        }

        _setButtonPauseState() {
            let buttonIcon = this._buttonIcon;
            buttonIcon.classList.remove('fa-pause', 'text-2xl');
            buttonIcon.classList.add('fa-play', 'text-xl');
        }

        setPlayState() {
            this._setButtonPlayState();
        }

        _setButtonPlayState() {
            let buttonIcon = this._buttonIcon;
            buttonIcon.classList.remove('fa-play', 'text-xl');
            buttonIcon.classList.add('fa-pause', 'text-2xl');
        }

        setButtonClickCallback(callback) {
            let button = this._root.querySelector('button');
            button.addEventListener('click', callback);
        }

        updateButtonState(isPlaying) {
            if (isPlaying) {
                this.setPlayState();
            } else {
                this.setPauseState();
            }
        }

        _setupMuteButton() {
            if (this._muteButton) {
                this._muteButton.addEventListener('click', () => {
                    if (this._settings.engine) {
                        this._settings.engine.toggleMute();
                    }
                });
            }
        }

        updateMuteButtonState(isMuted) {
            if (this._muteButton) {
                this._muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
            }
        }

        updateSongInfo(title, artist) {
            const capitalizeWords = (str) => {
                const minorWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'];
                const alwaysUppercase = ['wvh', 'nfl', 'usa', 'ac/dc'];
                const contractions = {
                    "aint": "ain't", "amnt": "amn’t", "arent": "aren't", "cant": "can't",
                    "couldve": "could've", "couldnt": "couldn't", "daren": "daren’t", "das": "d’s",
                    "didnt": "didn't", "doesnt": "doesn't", "dont": "don't", "hadnt": "hadn't",
                    "hasnt": "hasn't", "havent": "haven't", "hed": "he’d", "he'll": "he’ll",
                    "hes": "he's", "howd": "how’d", "howll": "how’ll", "howre": "how’re",
                    "howve": "how’ve", "id": "I'd", "i'll": "I'll", "im": "I'm", "isnt": "isn't", 
                    "itd": "it’d", "itll": "it’ll", "it's": "it's", "ive": "I've", "let's": "let's", 
                    "maynt": "mayn't", "mightve": "might've", "mightnt": "mightn't", "mustve": "must've",
                    "mustnt": "mustn't", "neednt": "needn't", "shant": "shan't", "shed": "she’d",
                    "she'll": "she’ll", "shes": "she's", "shouldve": "should've", "shouldnt": "shouldn't",
                    "somebodys": "somebody's", "someones": "someone's", "thatd": "that’d",
                    "thatll": "that’ll", "thats": "that's", "theyd": "they’d", "theyll": "they’ll",
                    "theyre": "they're", "theyve": "they've", "wasnt": "wasn't", "wed": "we’d",
                    "we'll": "we’ll", "we're": "we’re", "weve": "we've", "whatll": "what’ll",
                    "whats": "what's", "whens": "when’s", "wheres": "where’s", "whichd": "which’d",
                    "whichll": "which’ll", "whod": "who’d", "wholl": "who’ll", "whos": "who's",
                    "wont": "won't", "wouldve": "would've", "wouldnt": "wouldn't", "youd": "you’d",
                    "youll": "you’ll", "youre": "you’re", "youve": "you’ve"
                };

                const capitalizeParentheses = (s) => s.replace(/\(([^)]+)\)/g, (match, p1) => `(${p1.split(' ').map(word => {
                    return alwaysUppercase.includes(word.toLowerCase())
                        ? word.toUpperCase()
                        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }).join(' ')})`);

                return capitalizeParentheses(str)
                    .split(' ')
                    .map((word, index) => {
                        const lowerWord = word.toLowerCase();
                        if (contractions[lowerWord]) return contractions[lowerWord];
                        return (index === 0 || index === str.split(' ').length - 1 || !minorWords.includes(lowerWord))
                            ? alwaysUppercase.includes(lowerWord)
                                ? lowerWord.toUpperCase()
                                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                            : lowerWord;
                    })
                    .join(' ');
            };

            let formattedTitle = capitalizeWords(title).replace(/-/g, ' ') || 'No Title Available'; 
            let formattedArtist = capitalizeWords(artist).replace(/-/g, ' ') || `We'll Be Right Back`;

            const titleElement = document.getElementById('song-title');
            const artistElement = document.getElementById('song-artist');

            if (titleElement && artistElement) {
                titleElement.classList.add('fade', 'fade-out');
                artistElement.classList.add('fade', 'fade-out');

                setTimeout(() => {
                    titleElement.textContent = formattedTitle;
                    artistElement.textContent = formattedArtist;

                    titleElement.classList.remove('fade-out');
                    artistElement.classList.remove('fade-out');

                    titleElement.classList.add('fade-in');
                    artistElement.classList.add('fade-in');
                }, 500);

                setTimeout(() => {
                    titleElement.classList.remove('fade-in');
                    artistElement.classList.remove('fade-in');
                }, 1000);
            }

            this._adjustTextSize();
        }

        _adjustTextSize() {
            const titleElement = document.getElementById('song-title');
            const artistElement = document.getElementById('song-artist');

            if (!titleElement || !artistElement) return;

            const containerWidth = titleElement.parentElement.clientWidth;

            const titleInitialFontSize = 11;
            const artistInitialFontSize = 10;

            function adjustFontSize(element, initialFontSize) {
                let fontSize = initialFontSize;
                element.style.fontSize = `${fontSize}px`;

                while (element.scrollWidth > containerWidth && fontSize > 10) {
                    fontSize -= 1;
                    element.style.fontSize = `${fontSize}px`;
                }
            }

            adjustFontSize(titleElement, titleInitialFontSize);
            adjustFontSize(artistElement, artistInitialFontSize);
        }
    }

    class Engine {
        constructor(settings) {
            this._settings = settings;
            this._preExtendSettings();
            this._setRoot();
            this._postExtendSettings();
            this._isMuted = true; // Default to muted
        }

        _preExtendSettings() {
            this._settings.audioTag = 'audio';
        }

        _setRoot() {
            this._root = document.getElementById(this._settings.containerID);
        }

        _postExtendSettings() {
            this._engine = document.getElementById('audio-player');
            if (this._engine) {
                this._engine.src = this._settings.audioFilePath;
                this._engine.muted = true; // Start muted to comply with autoplay policies
                this._attemptPlayOnLoad();
            }
        }

        _attemptPlayOnLoad() {
            if (this._engine) {
                this._engine.play().catch(() => {
                    console.log('Autoplay blocked by browser policies.');
                });
            }
        }

        play() {
            if (this._engine) {
                this._engine.muted = false; // Unmute when play is clicked
                this._engine.play()
                    .then(() => this._notifyPlaybackStarted(true))
                    .catch((error) => console.error('Playback failed:', error));
            }
        }

        pause() {
            if (this._engine) {
                this._engine.muted = true; // Mute instead of stopping playback
                this._notifyPlaybackStarted(false);
            }
        }

        isPaused() {
            return this._engine ? this._engine.muted : true; // Treat muted as "paused"
        }

        toggleMute() {
            if (this._engine) {
                this._isMuted = !this._isMuted;
                this._engine.muted = this._isMuted;
                if (this._settings.ui) {
                    this._settings.ui.updateMuteButtonState(this._isMuted);
                }
            }
        }

        setOnEndedCallback(callback) {
            if (this._engine) {
                this._engine.addEventListener('ended', callback);
            }
        }

        _notifyPlaybackStarted(isPlaying) {
            if (this._settings.ui) {
                this._settings.ui.updateButtonState(isPlaying);
            }
        }
    }

    class SocialMusicPlayer {
        constructor(settings) {
            this._settings = settings;
            this._buildUserInterface();
            this._buildEngine();
            this._fetchAndUpdateSongInfo();
            this._setButtonClickCallback();
            this._setOnEndedCallback();
            this._setupAutoUpdate();
        }

        _buildUserInterface() {
            let userInterfaceSettings = {
                containerID: this._settings.containerID,
                song: this._settings.title,
                artist: this._settings.artist,
                engine: null
            };

            this._userInterface = new UserInterface(userInterfaceSettings);
        }

        _buildEngine() {
            let engineSettings = {
                containerID: this._settings.containerID,
                audioFilePath: this._settings.audioFilePath,
                ui: this._userInterface
            };

            this._engine = new Engine(engineSettings);
            this._userInterface._settings.engine = this._engine;
        }

        _fetchAndUpdateSongInfo() {
            fetch(this._settings.xmlFilePath)
                .then(response => response.text())
                .then(text => {
                    if (text.trim().startsWith('<?xml')) {
                        this._parseXML(text);
                    } else {
                        this._parseJSON(text);
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
        }

        _parseXML(xmlString) {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlString, "text/xml");
            let songTitle = xmlDoc.getElementsByTagName('title')[0]?.textContent || 'Unknown Title';
            let songArtist = xmlDoc.getElementsByTagName('artist')[0]?.textContent || 'Unknown Artist';
            this._userInterface.updateSongInfo(songTitle, songArtist);
        }

        _parseJSON(jsonString) {
            try {
                let jsonData = JSON.parse(jsonString);
                let performances = jsonData.performances[0];
                let songTitle = performances.title || 'Unknown Title';
                let songArtist = performances.artist || 'Unknown Artist';
                this._userInterface.updateSongInfo(songTitle, songArtist);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }

        _setupAutoUpdate() {
            setInterval(() => this._fetchAndUpdateSongInfo(), this._settings.updateInterval);
        }

        _setButtonClickCallback() {
            this._userInterface.setButtonClickCallback(() => {
                if (this._engine.isPaused()) {
                    this._engine.play();
                } else {
                    this._engine.pause();
                }
            });
        }

        _setOnEndedCallback() {
            this._engine.setOnEndedCallback(() => this._engine.play());
        }
    }

    new SocialMusicPlayer(settings);
});
