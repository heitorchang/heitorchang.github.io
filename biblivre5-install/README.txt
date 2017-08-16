  Usando Ubuntu

  1. Instalar Servidor PostgreSQL
  https://help.ubuntu.com/community/PostgreSQL

sudo apt-get install postgresql postgresql-contrib

  2. Instalar Maven
  
sudo apt-get install maven

  3. Instalar Tomcat
  https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-8-on-ubuntu-16-04

sudo apt-get update

  3a. Instalar Java

sudo apt-get install default-jdk

  3b. Adicionar grupo 'tomcat'

  sudo groupadd tomcat
  sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat

  3c. Instalar Tomcat 7
  https://help.ubuntu.com/lts/serverguide/tomcat.html

sudo apt install tomcat7
sudo apt install tomcat7-admin

  3c.1. Para testar, Port 8081
  Editar /etc/tomcat7/server.xml

  3c.2. Para reiniciar o servidor Tomcat
  
sudo service tomcat7 restart

  3c.3. Para gerenciar o servidor Tomcat
  Editar /etc/tomcat7/tomcat-users.xml

<tomcat-users>
  <role rolename="manager-gui"/>
  <user username="admin" password="secreto" roles="manager-gui"/>

</tomcat-users>

  3c.3.2. Reiniciar servidor

sudo service tomcat7 restart

  3c.3.3. Para usar o Manage, navegue a http://127.0.0.1:8081/manager/html

  4. Clonar repositório do Github,

git clone https://github.com/Biblivre/Biblivre-5

  5. Rodar script contido no Biblivre-5/README.md

  (salvei separadamente aqui como Biblivre-5/lib/biblivre-maven.sh)

cd Biblivre-5/lib/
chmod 755 biblivre-maven.sh
./biblivre-maven.sh

  6. Crie o banco de dados PostgreSQL

  6a. Defina a senha do usuário (role) 'postgres'

sudo -u postgres psql postgres
\password postgres
Tecle <Ctrl-D> para sair

(eu deixei em branco)
  
  6b. No diretório Biblivre-5/sql/ execute

sudo -u postgres psql -U postgres -f createdatabase.sql

sudo -u postgres psql -U postgres -f biblivre4.sql -d biblivre4

  ESTE PASSO TALVEZ DESNECESSARIO
  6c. Adicione o driver JDBC PostgreSQL como dependência
  Edite Biblivre-5/pom.xml, dentro de </dependencies>, adicione:

        <!-- org.postgresql.Driver -->
        <dependency>	
          <groupId>org.postgresql</groupId>
          <artifactId>postgresql</artifactId>
          <version>42.1.4</version>
        </dependency>        

  https://jdbc.postgresql.org/download.html

  6d. Segundo StackOverflow, tomcat-jdbc.jar precisa estar no diretório /usr/share/tomcat7/lib
  https://stackoverflow.com/questions/18260569/tomcat7-connection-pool-error
  http://search.maven.org/#search%7Cga%7C1%7Ctomcat-jdbc

  postgresql-42.1.4.jar (Driver) também
  https://jdbc.postgresql.org/download.html

  6e. Reiniciar o servidor Tomcat

sudo service tomcat7 restart

  6f. Adicionar bancos de dados 'biblivre3' e 'biblivre4_b3b_restore' (aparecem erros)
  Salvar no diretório sql, o arquivo 'createold.sql'

CREATE DATABASE biblivre3
  WITH OWNER = biblivre
       ENCODING = 'UTF8'
       CONNECTION LIMIT = -1;

CREATE DATABASE biblivre4_b3b_restore
  WITH OWNER = biblivre
       ENCODING = 'UTF8'
       CONNECTION LIMIT = -1;

  Depois, execute:
  
sudo -u postgres psql -U postgres -f createold.sql

  7. Crie o WAR

  Voltar ao diretório Biblivre-5/

mvn package

  7a. WAR está no diretório Biblivre-5/target

  7b. Adicionar WAR ao servidor Tomcat

  Navegue a http://127.0.0.1:8081/manager/html
  Use a opção "WAR file to deploy"


  End. Save to heitorchang.github.io, capture screenshots
