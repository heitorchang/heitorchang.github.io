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

  3c.3.3. Para usar o Manager, navegue a http://127.0.0.1:8081/manager/html

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

  7. No diretório src/, crie o diretório main/
  
  7a. Copie a pasta "src/java" para "src/main/"

  7b. Edite a dependência javax.servlet no pom.xml para

        <dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>javax.servlet-api</artifactId>
			<version>3.0.1</version>
            <scope>provided</scope>
		</dependency>

  7c. Adicione a dependência de log4j

  <dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
  </dependency>

  7d. Adicione a dependência de jsp

<!-- https://mvnrepository.com/artifact/javax.servlet.jsp/javax.servlet.jsp-api -->
<dependency>
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>javax.servlet.jsp-api</artifactId>
    <version>2.3.1</version>
    <scope>provided</scope>
</dependency>

  7e. Adicione a dependência de Spring-context e Spring-context-support

<!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>4.3.10.RELEASE</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework/spring-context-support -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context-support</artifactId>
    <version>3.2.16.RELEASE</version>
</dependency>

  7f. Edite a dependência de jz:

		<!-- z39.50 -->
		<dependency>
			<groupId>org.jzkit</groupId>
			<artifactId>jzkit2_z3950_plugin</artifactId>
			<version>2.2.3</version>
            <scope>system</scope>
            <systemPath>${basedir}/lib/jzkit2_z3950_plugin-2.2.3.jar</systemPath>
			<exclusions>
				<exclusion>
					<artifactId>marc4j</artifactId>
					<groupId>marc4j</groupId>
				</exclusion>
				<exclusion>
					<artifactId>jdbm</artifactId>
					<groupId>jdbm</groupId>
				</exclusion>
				<exclusion>
					<artifactId>xalan</artifactId>
					<groupId>xalan</groupId>
				</exclusion>
				<exclusion>
					<artifactId>maven-antrun-plugin</artifactId>
					<groupId>org.apache.maven.plugins</groupId>
				</exclusion>
				<exclusion>
					<artifactId>ant</artifactId>
					<groupId>ant</groupId>
				</exclusion>
			</exclusions>
		</dependency>

  7g. Adicione as dependências jzkit restantes

  <dependency>
    <groupId>org.jzkit</groupId>
    <artifactId>jzkit2_core</artifactId>
    <version>2.2.3</version>
  </dependency>

  <dependency>
    <groupId>org.jzkit</groupId>
    <artifactId>jzkit2_jdbc_plugin</artifactId>
    <version>2.2.3</version>
  </dependency>

  <dependency>
    <groupId>org.jzkit</groupId>
    <artifactId>jzkit2_service</artifactId>
    <version>2.2.3</version>
  </dependency>

  8. Compile as páginas de estilos SCSS a CSS

sudo apt-get install ruby-sass

  No diretório Biblivre-5/WebContent/static/styles/scss execute

sass --update scss:css .

mv *.css ../

  9. Crie o WAR

  Volte ao diretório Biblivre-5/

mvn package

  9a. WAR está no diretório Biblivre-5/target. Dê o nome ROOT.war para que esteja no Path /

mv Biblivre4.war ROOT.war

  9b. Adicionar WAR ao servidor Tomcat

  Navegue a http://127.0.0.1:8081/manager/html
  Use a opção "WAR file to deploy"

  10. Para entrar como administrador, use o login 'admin' com senha 'abracadabra'. No meu computador, mudei a senha para 'secreto'

  A. Arquivos Log localizados em /var/lib/tomcat7/logs/

  A1. Exibir todas mensagens de erro
  Crie o arquivo /var/lib/tomcat7/webapps/Biblivre4/WEB-INF/classes/logging.properties com esse conteúdo e reinicie o servidor

org.apache.catalina.core.ContainerBase.[Catalina].level=INFO
org.apache.catalina.core.ContainerBase.[Catalina].handlers=java.util.logging.ConsoleHandler
