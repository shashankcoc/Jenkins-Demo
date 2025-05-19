// pipeline {
//     agent any

//     environment {
//         IMAGE_NAME = 'jenkins-demo-node-app'
//     }

//     stages {
//         stage('Clone') {
//             steps {
//                 git branch: 'main', 
//                 url: 'https://github.com/shashankcoc/Jenkins-Demo.git'
//             }
//         }

//         stage('Build Docker Image') {
//             steps {
//                 script {
//                     dockerImage = docker.build("${IMAGE_NAME}")
//                 }
//             }
//         }

//         stage('Run Docker Container') {
//             steps {
//                 script {
//                     // Stop and remove existing container if running
//                     // sh "docker rm -f ${IMAGE_NAME} || true"

//                     // Run new container
//                     dockerImage.run("-d -p 3000:3000 --name ${IMAGE_NAME}")
//                 }
//             }
//         }
//     }
// }





// Now using docker docker hub to push image to docker hub
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'jenkins-demo-node-app'
        DOCKERHUB_IMAGE = 'shashankcoc/jenkins-demo-node-app:latest'
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

        stage('Tag Docker Image') {
            steps {
                bat "docker tag ${IMAGE_NAME} %DOCKERHUB_IMAGE%"
            }
        }

       stage('Login to Docker Hub') {
    steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            bat '''
                echo %PASSWORD% > docker-pass.txt
                docker login -u %USERNAME% --password-stdin < docker-pass.txt
                del docker-pass.txt
            '''
        }
    }
}


stage('Push Docker Image') {
    steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            bat """
                docker push %DOCKERHUB_IMAGE%
            """
        }
    }
}

        stage('Logout Docker Hub') {
            steps {
                bat 'docker logout'
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    dockerImage.run("-d -p 8000:8000 --name ${IMAGE_NAME}")
                }
            }
        }
    }
}

