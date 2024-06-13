commit:
	@git add .
	@git commit -m "Commit $$(git rev-list --count --all) made on $$(date '+%m-%d-%Y') at $$(date '+%-I:%M:%S %p')"
	@git push -u origin main
	@echo Commit pushed to Github