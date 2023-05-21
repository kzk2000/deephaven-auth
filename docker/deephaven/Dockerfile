FROM ghcr.io/deephaven/server:0.24.1
RUN mkdir -p /apps/libs/
COPY ./deephaven-oidc-authentication-provider-0.24.1-all.jar /apps/libs/deephaven-oidc-authentication-provider-0.24.1-all.jar
COPY ./js-plugins/ /opt/deephaven/config/js-plugins/