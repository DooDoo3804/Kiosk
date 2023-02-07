FROM openjdk:17
VOLUME /tmp
EXPOSE 8081
FROM openjdk:11
ARG JAR_FILE=target/inburger.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]