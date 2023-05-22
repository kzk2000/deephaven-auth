FROM ghcr.io/deephaven/web-plugin-packager:latest as js-plugins
RUN ./pack-plugins.sh @deephaven/js-plugin-auth-keycloak

FROM ghcr.io/deephaven/server:0.24.1
RUN mkdir -p /apps/libs/
COPY ./deephaven-oidc-authentication-provider-0.24.1-all.jar /apps/libs/deephaven-oidc-authentication-provider-0.24.1-all.jar
COPY --from=js-plugins js-plugins/ /opt/deephaven/config/js-plugins/