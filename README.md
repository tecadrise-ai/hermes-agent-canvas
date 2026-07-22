# Hermes Canvas

Visual shell for a block-style Hermes agent canvas. UI only for now (no gateway).

## Run (Windows)

```powershell
cd C:\TecAdRise\projects-git\hermes-canvas
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn server:app --host 127.0.0.1 --port 9100 --reload
```

Open http://127.0.0.1:9100
