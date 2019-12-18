pipeline {
    agent any
    options { 
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')
        disableConcurrentBuilds()
        parallelsAlwaysFailFast()
    }
    stages {
        stage('Run tests') {
            steps {
                echo "Job: ${JOB_NAME}"
                script {
                    def params = [
                        [
                            $class: 'StringParameterValue',
                            name: 'dockerimage_compilers',
                            value: "tonlabs/compilers:latest"
                        ],
                        [
                            $class: 'StringParameterValue',
                            name: 'dockerimage_local_node',
                            value: "tonlabs/local-node:latest"
                        ],
                        [
                            $class: 'StringParameterValue',
                            name: 'ton_client_js_branch',
                            value: "${GIT_BRANCH}"
                        ],
                        [
                            $class: 'StringParameterValue',
                            name: 'ton_client_js_commit',
                            value: "${GIT_COMMIT}"
                        ]
                    ] 

                    build job: "Integration/integration-tests/master", parameters: params
                }
            }
        }
    }
}
