#!/bin/bash

echo "Creating glance.yml file on host..."

# Create the file on the host system (ensure the path is accessible and writable by the container)
touch "${APP_DATA_DIR}/config/glance.yml"

echo "File created on the host system."
