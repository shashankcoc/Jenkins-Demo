pipeline {
    agent any

    tools {
        nodejs 'Nodejs'
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/shashankcoc/Jenkins-Demo.git'
            }
        }

        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm install'
            }
        }
    }
}
