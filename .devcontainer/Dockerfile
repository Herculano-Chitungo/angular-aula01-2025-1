FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Install MongoDB command line tools
ARG MONGO_TOOLS_VERSION=6.0
RUN . /etc/os-release \
    && curl -sSL "https://www.mongodb.org/static/pgp/server-${MONGO_TOOLS_VERSION}.asc" | gpg --dearmor > /usr/share/keyrings/mongodb-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] http://repo.mongodb.org/apt/debian ${VERSION_CODENAME}/mongodb-org/${MONGO_TOOLS_VERSION} main" | tee /etc/apt/sources.list.d/mongodb-org-${MONGO_TOOLS_VERSION}.list \
    && apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y mongodb-mongosh \
    && if [ "$(dpkg --print-architecture)" = "amd64" ]; then apt-get install -y mongodb-database-tools; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Configurações de Shell Completion
RUN echo "source /usr/share/bash-completion/completions/git" >> /etc/bash.bashrc \
    && echo "source <(npm completion)" >> /etc/bash.bashrc \
    && echo "source <(node --completion-bash)" >> /etc/bash.bashrc

# Instala Angular CLI
RUN su node -c "npm install -g @angular/cli@17" \
    && echo "source <(ng completion script)" >> /etc/bash.bashrc

# Instala Navegadores e pacotes de SO
RUN echo "Instalando navegadores e pacotes..." \
    && apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends chromium firefox-esr \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Define variáveis de ambiente para os binários
ENV CHROME_BIN=/usr/bin/chromium
ENV FIREFOX_BIN=/usr/bin/firefox-esr