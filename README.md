## Deephaven + Auth
Experiment to get the authentication layer working, per these instructions:
https://github.com/deephaven/deephaven-core/tree/main/authentication/example-providers/oidc


### Prerequisite (this was done outside of this repo)
```bash
cd ~
git clone git@github.com:deephaven/deephaven-core.git
cd deephaven-core
./gradlew server-jetty-app:assemble -Poidc
```
-> this builds the entire app but we actually are only after [deephaven-oidc-authentication-provider-0.24.0-all.jar](./deephaven-oidc-authentication-provider-0.24.0-all.jar) 
which you find here after the full build completed (for convenience, we added it to this repo):
```bash
user@user-linux:~/deephaven-core/authentication/example-providers/oidc/build/libs$ ls -la
total 7176
drwxrwxr-x 2 user user    4096 May  1 21:41 .
drwxrwxr-x 6 user user    4096 May  1 21:41 ..
-rw-rw-r-- 1 user user 7339798 May  1 21:41 deephaven-oidc-authentication-provider-0.24.0-all.jar
```

# Run it
git clone 
