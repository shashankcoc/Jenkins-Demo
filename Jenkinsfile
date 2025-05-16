pipeline {
    agent any

    environment {
        IMAGE_NAME = 'jenkins-demo-node-app'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/shashankcoc/Jenkins-Demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove existing container if running
                    // sh "docker rm -f ${IMAGE_NAME} || true"

                    // Run new container
                    dockerImage.run("-d -p 3000:3000 --name ${IMAGE_NAME}")
                }
            }
        }
    }
}
