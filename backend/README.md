# Calculator Micro Service

## Dependencies
- Latest Intellij IDE version
- Java 11 SDK
- H2 database
- Liquibase
- gradle


## Technology stack
- Type: web application
- Language: Java 11
- Framework: Spring Boot framework
- Build tool: Gradle

## Start the application

### Using Intellij:
- Open the project in Intellij and press the green arrow in toolbar
- if the green arrow is disabled then:
    - select **CalcApplication** configuration from the dropdown on the left of it

## Build the application
- build runnable jar using the below command
    ```shell script
    ./gradlew bootJar
    ```

Distributable .jar will be located in /build/target folder