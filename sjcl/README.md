# SJCL Version

[v. 1.0.8](https://github.com/bitwiseshiftleft/sjcl/releases/tag/1.0.8)

# Using SJCL

## Encrypt

```
sjcl.encrypt("password", "data");
```

The resulting string (looks like JSON) is the encrypted data.

## Decrypt

Given the string, call

```
sjcl.decrypt("password", encryptedData);
```

`encryptedData` should be a string, not an object.