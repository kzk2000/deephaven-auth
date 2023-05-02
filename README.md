## Deephaven + Auth
Experiment to get the authentication layer working, per these instructions:
https://github.com/deephaven/deephaven-core/tree/main/authentication/example-providers/oidc


### Prerequisite (this was done outside of this repo)
```bash
cd ~
git clone git@github.com:kzk2000/deephaven-auth.git
cd deephaven-core
./gradlew server-jetty-app:assemble -Poidc
```
This actually builds the entire app but we actually are only after [deephaven-oidc-authentication-provider-0.24.0-all.jar](build/deephaven-oidc-authentication-provider-0.24.0-all.jar) 
which we added to this repo for convenience.<br>After the gradlew build you would find it here:
```bash
user@user-linux:~/deephaven-core/authentication/example-providers/oidc/build/libs$ ls -la
total 7176
drwxrwxr-x 2 user user    4096 May  1 21:41 .
drwxrwxr-x 6 user user    4096 May  1 21:41 ..
-rw-rw-r-- 1 user user 7339798 May  1 21:41 deephaven-oidc-authentication-provider-0.24.0-all.jar
```

# Run this repo
```bash
cd ~
git clone git@github.com:kzk2000/deephaven-auth.git
cd deephaven-auth
docker-compose up -d
```
As keycloak takes a while the deephaven container initially fails.
Just wait a few seconds and rund ```docker-compose up -d``` again.


## Issue / not working yet:
The deephaven container doesn't seem to be able to connect to the keycloak container, i.e.
```docker logs deephaven``` throws this error:

```buildoutcfg
2023-05-02T02:03:31.413Z | main                 |  INFO | .d.s.r.DeephavenApiServer | Initializing Authentication...
Initiating shutdown due to: Uncaught exception in thread main
org.pac4j.core.exception.TechnicalException: java.net.ConnectException: Connection refused
        at org.pac4j.oidc.config.OidcConfiguration.internalInit(OidcConfiguration.java:190)
        at org.pac4j.oidc.config.KeycloakOidcConfiguration.internalInit(KeycloakOidcConfiguration.java:24)
        at org.pac4j.core.util.InitializableObject.init(InitializableObject.java:56)
        at org.pac4j.oidc.client.OidcClient.internalInit(OidcClient.java:48)
        at org.pac4j.oidc.client.KeycloakOidcClient.internalInit(KeycloakOidcClient.java:38)
        at org.pac4j.core.util.InitializableObject.init(InitializableObject.java:56)
        at org.pac4j.core.util.InitializableObject.init(InitializableObject.java:33)
        at io.deephaven.authentication.oidc.OidcAuthenticationHandler.initialize(OidcAuthenticationHandler.java:48)
        at io.deephaven.server.runner.DeephavenApiServer.lambda$run$1(DeephavenApiServer.java:151)
        at java.base/java.util.LinkedHashMap.forEach(LinkedHashMap.java:721)
        at java.base/java.util.Collections$UnmodifiableMap.forEach(Collections.java:1553)
        at io.deephaven.server.runner.DeephavenApiServer.run(DeephavenApiServer.java:151)
        at io.deephaven.server.jetty.JettyMain.main(JettyMain.java:24)
Caused by: java.net.ConnectException: Connection refused
        at java.base/sun.nio.ch.Net.pollConnect(Native Method)
        at java.base/sun.nio.ch.Net.pollConnectNow(Net.java:672)
        at java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:542)
        at java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:597)
        at java.base/java.net.Socket.connect(Socket.java:633)
        at java.base/sun.net.NetworkClient.doConnect(NetworkClient.java:178)
        at java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:531)
        at java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:636)
        at java.base/sun.net.www.http.HttpClient.<init>(HttpClient.java:279)
        at java.base/sun.net.www.http.HttpClient.New(HttpClient.java:384)
        at java.base/sun.net.www.http.HttpClient.New(HttpClient.java:406)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1309)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1242)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1128)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:1057)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.getInputStream0(HttpURLConnection.java:1665)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1589)
        at com.nimbusds.jose.util.DefaultResourceRetriever.getInputStream(DefaultResourceRetriever.java:305)
        at com.nimbusds.jose.util.DefaultResourceRetriever.retrieveResource(DefaultResourceRetriever.java:257)
        at org.pac4j.oidc.config.OidcConfiguration.internalInit(OidcConfiguration.java:187)
        ... 12 more
2023-05-02T02:03:31.445Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Initiating shutdown processing
2023-05-02T02:03:31.446Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Starting to invoke FIRST shutdown tasks
2023-05-02T02:03:31.452Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Done invoking FIRST shutdown tasks
2023-05-02T02:03:31.452Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Starting to invoke MIDDLE shutdown tasks
2023-05-02T02:03:31.453Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Done invoking MIDDLE shutdown tasks
2023-05-02T02:03:31.453Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Starting to invoke LAST shutdown tasks
2023-05-02T02:03:31.455Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Done invoking LAST shutdown tasks
2023-05-02T02:03:31.455Z | Thread-0             |  WARN | d.u.p.ShutdownManagerImpl | Finished shutdown processing



```