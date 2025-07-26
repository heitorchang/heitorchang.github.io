#!/bin/bash

gpg --symmetric tmp_for_edit_misc_sheets.ods

timestamp=`date +%Y-%m-%d_%H%M%S`

if [ $? -eq 0 ]; then
    cp -f tmp_for_edit_misc_sheets.ods.gpg misc_sheets_$timestamp.ods.gpg
    echo Saved misc_sheets_$timestamp.ods.gpg

    mv -f tmp_for_edit_misc_sheets.ods.gpg misc_sheets.ods.gpg
    echo Saved misc_sheets.ods.gpg

    rm -f tmp_for_edit_misc_sheets.ods
else
    echo GPG did not complete successfully.
fi
