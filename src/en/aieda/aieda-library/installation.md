---
title: "Installation"
order: 2
---



### Method 1: Docker Build (Recommended)

Docker provides a containerized environment with all dependencies pre-configured.

#### Prerequisites
- Docker installed on your system
- At least 8GB of available disk space

#### Build Steps

1. **Clone the repository with submodules:**
   ```bash
   git clone <repository-url>
   cd aieda_fork
   git submodule update --init --recursive
   ```

2. **Build the Docker image:**
   ```bash
   # Use the provided build script
   ./build_docker.sh
   
   # Or build manually
   docker build -f Dockerfile.base -t aieda:base .
   docker build -f Dockerfile.final -t aieda:latest .
   ```

3. **Run the container:**
   ```bash
   docker run --rm -it aieda:latest
   ```

4. **Test the installation:**
   ```bash
   docker run --rm aieda:latest python3 test/test_sky130_gcd.py
   ```

For detailed Docker instructions, refer to the build script and configuration files in the repository.

### Method 2: UV Build (Development)

UV provides a fast Python package manager for local development.

#### Prerequisites
- Python 3.10 or higher
- UV package manager
- iEDA dependencies (C++ compiler, CMake, etc.)

#### Build Steps

1. **Install UV:**
   ```bash
   pip install uv
   ```

2. **Verify UV installation:**
   ```bash
   uv --version
   ```

3. **Create and activate virtual environment:**
   ```bash
   uv venv
   source .venv/bin/activate
   ```

4. **Install dependencies:**
   ```bash
   uv run python -m build
   ```

5. **Build aieda package:**
   ```bash
   uv build
   ```

6. **Install aieda:**
   ```bash
   uv pip install dist/aieda-0.1.0-py3-none-any.whl
   ```

7. **Test the installation:**
   ```bash
   uv run python test/test_sky130_gcd.py
   ```

#### iEDA Compilation (Required for UV build)

Before using AiEDA with UV, you need to compile the iEDA backend:

 **Compile iEDA:**
   ```bash
   mkdir build
   cd build
   cmake ..
   make -j32 ieda_py
   ```
