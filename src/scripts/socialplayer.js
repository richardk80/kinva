document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('social-music-player');
    const autoplay = container.hasAttribute('data-autoplay') && container.getAttribute('data-autoplay').toLowerCase() !== 'false';
    
    const settings = {
        containerID: container.id,
        audioFilePath: container.getAttribute('data-audio-file-path'),
        autoplay: autoplay,
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

        updateSongInfo(title, artist) {
            const capitalizeWords = (str) => {
                const minorWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'];
                const alwaysUppercase = ['wvh', 'nfl', 'usa', 'ac/dc'];
                const contractions = {
                    "aint": "ain't", "amnt": "amn’t", "arent": "aren't", "cant": "can't",
                    "couldve": "could've", "couldnt": "couldn't", "daren": "daren’t", "das": "d’s",
                    "didnt": "didn't", "doesnt": "doesn't", "dont": "don't", "hadnt": "hadn't",
                    "hasnt": "hasn't", "havent": "haven't", "hed": "he’d", "hell": "he’ll",
                    "hes": "he's", "howd": "how’d", "howll": "how’ll", "howre": "how’re",
                    "howve": "how’ve", "id": "I'd", "ill": "I'll", "im": "I'm", "isnt": "isn't", "itd": "it’d", "itll": "it’ll",
                    "its": "it's", "ive": "I've", "lets": "let's", "maynt": "mayn't",
                    "mightve": "might've", "mightnt": "mightn't", "mustve": "must've",
                    "mustnt": "mustn't", "neednt": "needn't", "shant": "shan't", "shed": "she’d",
                    "shell": "she’ll", "shes": "she's", "shouldve": "should've", "shouldnt": "shouldn't",
                    "somebodys": "somebody's", "someones": "someone's", "thatd": "that’d",
                    "thatll": "that’ll", "thats": "that's", "theyd": "they’d", "theyll": "they’ll",
                    "theyre": "they're", "theyve": "they've", "wasnt": "wasn't", "wed": "we’d",
                    "well": "we’ll", "were": "we’re", "weve": "we've", "whatll": "what’ll",
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
                        if (contractions[lowerWord]) {
                            return contractions[lowerWord];
                        }
                        return (index === 0 || index === str.split(' ').length - 1 || !minorWords.includes(lowerWord))
                            ? alwaysUppercase.includes(lowerWord)
                                ? lowerWord.toUpperCase()
                                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                            : lowerWord;
                    })
                    .join(' ');
            };
        
            // Capitalize title and artist
            let formattedTitle = capitalizeWords(title).replace(/-/g, ' ') || 'No Title Available'; // Remove hyphens in title
            let formattedArtist = capitalizeWords(artist).replace(/-/g, ' ') || 'No Artist Available'; // Remove hyphens in artist
        
            // Get current song info
            const titleElement = document.getElementById('song-title');
            const artistElement = document.getElementById('song-artist');
            const currentTitle = titleElement.textContent;
            const currentArtist = artistElement.textContent;
        
            // Check if the song info has changed
            if (formattedTitle !== currentTitle || formattedArtist !== currentArtist) {
                // Apply fade-out effect
                titleElement.classList.add('fade', 'fade-out');
                artistElement.classList.add('fade', 'fade-out');
        
                // After fade-out duration, update text and apply fade-in effect
                setTimeout(() => {
                    titleElement.textContent = formattedTitle;
                    artistElement.textContent = formattedArtist;
        
                    titleElement.classList.remove('fade-out');
                    artistElement.classList.remove('fade-out');
        
                    titleElement.classList.add('fade-in');
                    artistElement.classList.add('fade-in');
                }, 500); // Match this duration to your fade-out transition duration
        
                // Remove fade-in class after transition ends
                setTimeout(() => {
                    titleElement.classList.remove('fade-in');
                    artistElement.classList.remove('fade-in');
                }, 1000); // This should be longer than the transition duration
            } else {
                // If no change, just update text without animation
                titleElement.textContent = formattedTitle;
                artistElement.textContent = formattedArtist;
            }
        
            // Adjust text size to fit container
            this._adjustTextSize();
        }
        
        _adjustTextSize() {
            const titleElement = document.getElementById('song-title');
            const artistElement = document.getElementById('song-artist');
        
            // Check if both elements exist
            if (!titleElement || !artistElement) return;
        
            // Get container width from the parent of the title element
            const containerWidth = titleElement.parentElement.clientWidth;
        
            // Define initial font sizes for title and artist
            const titleInitialFontSize = 13; // Initial font size for title in px
            const artistInitialFontSize = 11; // Initial font size for artist in px
        
            function adjustFontSize(element, initialFontSize) {
                let fontSize = initialFontSize; // Start with the initial font size
                element.style.fontSize = `${fontSize}px`;
        
                while (element.scrollWidth > containerWidth && fontSize > 10) {
                    fontSize -= 1; // Decrement in px
                    element.style.fontSize = `${fontSize}px`;
                }
            }
        
            // Adjust font size for title and artist separately
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
            this._setupAutoplay();
        }

        _preExtendSettings() {
            this._settings.audioTag = 'audio';
        }

        _setRoot() {
            this._root = document.getElementById(this._settings.containerID);
        }

        _postExtendSettings() {
            this._engine = document.getElementById('audio-player');
        }

        _setupAutoplay() {
            if (this._settings.autoplay) {
                this._attemptPlay();
            }
        }

        _attemptPlay() {
            this._engine.play().then(() => {
                this._notifyPlaybackStarted(true);
            }).catch(error => {
                this._notifyPlaybackStarted(false);
            });
        }

        play() {
            this._attemptPlay();
        }

        pause() {
            this._engine.pause();
            this._notifyPlaybackStarted(false);
        }

        isPaused() {
            return this._engine.paused;
        }

        setOnEndedCallback(callback) {
            this._engine.addEventListener('ended', callback);
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
            };

            this._userInterface = new UserInterface(userInterfaceSettings);
        }

        _buildEngine() {
            let engineSettings = {
                containerID: this._settings.containerID,
                audioFilePath: this._settings.audioFilePath,
                autoplay: this._settings.autoplay,
                ui: this._userInterface
            };

            this._engine = new Engine(engineSettings);
        }

        _fetchAndUpdateSongInfo() {
            fetch(this._settings.xmlFilePath)
                .then(response => response.text())
                .then(text => {
                    let isXML = text.trim().startsWith('<?xml');
                    if (isXML) {
                        this._parseXML(text);
                    } else {
                        this._parseJSON(text);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this._userInterface.updateSongInfo(null, null);
                });
        }

        _parseXML(xmlString) {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlString, "text/xml");
            let songTitle = xmlDoc.getElementsByTagName('title')[0]?.textContent;
            let songArtist = xmlDoc.getElementsByTagName('artist')[0]?.textContent;
            this._userInterface.updateSongInfo(songTitle, songArtist);
        }

        _parseJSON(jsonString) {
            try {
                let jsonData = JSON.parse(jsonString);
                let performances = jsonData.performances[0];
                let songTitle = performances.title;
                let songArtist = performances.artist;
                this._userInterface.updateSongInfo(songTitle, songArtist);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                this._userInterface.updateSongInfo(null, null);
            }
        }

        _setupAutoUpdate() {
            setInterval(() => {
                this._fetchAndUpdateSongInfo();
            }, this._settings.updateInterval);
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
            this._engine.setOnEndedCallback(() => {
                this._engine.play();
            });
        }
    }

    new SocialMusicPlayer(settings);
});