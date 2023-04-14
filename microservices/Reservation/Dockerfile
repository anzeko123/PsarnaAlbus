FROM eclipse-temurin:17
LABEL maintainer="anzeko"
WORKDIR /app
ADD target/demo-0.0.1-SNAPSHOT.jar /app/demo.jar
ENTRYPOINT ["java","-jar","demo.jar"]