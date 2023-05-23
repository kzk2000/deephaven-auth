FROM ghcr.io/deephaven/web-plugin-packager:latest as js-plugins
RUN ./pack-plugins.sh @deephaven/js-plugin-auth-keycloak

FROM ghcr.io/deephaven/server:0.24.2
RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

RUN wget https://repo1.maven.org/maven2/io/deephaven/deephaven-oidc-authentication-provider/0.24.2/deephaven-oidc-authentication-provider-0.24.2-all.jar -P /apps/libs/
COPY --from=js-plugins js-plugins/ /opt/deephaven/config/js-plugins/