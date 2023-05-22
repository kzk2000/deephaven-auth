## Deephaven + Auth
Experiment to get the authentication layer working, per these instructions:
https://github.com/deephaven/deephaven-core/tree/main/authentication/example-providers/oidc

# Run this repo
```bash
cd ~
git clone git@github.com:kzk2000/deephaven-auth.git
cd deephaven-auth
docker-compose build --no-cache
docker-compose up -d
```
The keycloak container takes 10+ sec to come up, usually all 3 containers should come up within < 20 seconds.

To test that ODIC is working, go to
http://localhost:10000/jsapi/authentication/oidc.html


### Prerequisite details (this was done outside of this repo)
```bash
cd ~
git clone git@github.com:kzk2000/deephaven-auth.git
cd deephaven-core
./gradlew server-jetty-app:assemble -Poidc
```
This actually builds the entire app but we actually are only after [deephaven-oidc-authentication-provider-0.24.1-all.jar](docker/deephaven/deephaven-oidc-authentication-provider-0.24.1-all.jar) 
which **we added to this repo for convenience.** After the gradlew build completes you would find it here:
```bash
user@user-linux:~/deephaven-core/authentication/example-providers/oidc/build/libs$ ls -la
total 7176
drwxrwxr-x 2 user user    4096 May  1 21:41 .
drwxrwxr-x 6 user user    4096 May  1 21:41 ..
-rw-rw-r-- 1 user user 7339798 May  1 21:41 deephaven-oidc-authentication-provider-0.24.1-all.jar
```

**[UPDATE]**: You can also download it from https://repo1.maven.org/maven2/io/deephaven/deephaven-oidc-authentication-provider/0.24.1/
