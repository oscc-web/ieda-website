---
title: "Getting Started"
order: 3
---


### Basic Usage Example

```python
import aieda
from aieda.workspace import workspace_create
from aieda.flows import RunIEDA, DataGeneration
from aieda.analysis import CellTypeAnalyzer
from aieda.ai import TabNetTrainer

# Create workspace
workspace = workspace_create(directory="./my_design", design="gcd")

# Run EDA flow
run_ieda = RunIEDA(workspace)
run_ieda.run_flows()

# Generate training data
data_gen = DataGeneration(workspace)
data_gen.generate_vectors()

# Perform analysis
analyzer = CellTypeAnalyzer()
analyzer.analyze()

# Train AI model
trainer = TabNetTrainer()
trainer.train()
```

### Running Tests

```bash
# Test iEDA backend
python test/test_ieda_backend.py

# Test design-level analysis
python test/test_analysis_design.py

# Test AI model training
python test/test_ai_task_placement.py
```
