group = "com.itpiwo.cms"
version = "0.0.1-SNAPSHOT"

plugins {
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    kotlin("jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation("io.projectreactor:reactor-core")
    implementation("org.hibernate.validator:hibernate-validator")
    testImplementation("io.projectreactor:reactor-test")
}