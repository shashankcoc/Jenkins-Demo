pipeline {
    agent any

    tools {
        nodejs 'Nodejs'
        git 'DefaultGit' 
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/shashankcoc/Jenkins-Demo.git'
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
