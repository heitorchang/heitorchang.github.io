#!/bin/bash

if [ -f misc_sheets.ods.gpg ]; then
    gpg -d misc_sheets.ods.gpg > tmp_for_edit_misc_sheets.ods
    echo Edit tmp_for_edit_misc_sheets.ods
else
    echo Could not find misc_sheets.ods.gpg
fi
