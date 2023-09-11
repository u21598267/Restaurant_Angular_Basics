#!/bin/bash

# Grant execute permissions to this script
chmod +x ./rollback.sh

# Rollback to the previous Git commit
git reset --hard HEAD^

# Restart the application
npm start
