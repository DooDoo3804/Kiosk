FROM
VOLUME /tmp
EXPOSE 8081
#ARG JAR_FILE={이름}
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]