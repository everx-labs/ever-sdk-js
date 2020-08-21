G_is_PR_to_master = false

pipeline {
    agent any
    options { 
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')
        disableConcurrentBuilds()
        parallelsAlwaysFailFast()
    }
    stages {
        stage("Is PR to master") {
            when {
                changeRequest target: 'master'
            }
            steps {
                script {
                    G_is_PR_to_master = true
                }
            }
        }
        stage("Build info") {
            steps {
                script {
                    def buildCause = currentBuild.getBuildCauses()
                    echo "buildCause: ${buildCause}"

                    C_TEXT = """
                        Job: ${JOB_NAME}
                        Build cause: ${buildCause.shortDescription[0]}
                        Is PR to master: ${G_is_PR_to_master}
                    """

                    C_PROJECT = GIT_URL.substring(19,GIT_URL.length()-4)
                    echo C_PROJECT
                    echo C_TEXT
                    currentBuild.description = C_TEXT
                }
            }
        }
        stage('Run tests') {
            steps {
                echo "Job: ${JOB_NAME}"
                script {
                    def params = [
                        [
                            $class: 'BooleanParameterValue',
                            name: 'RUN_TESTS_ALL',
                            value: false
                        ],
                        [
                            $class: 'BooleanParameterValue',
                            name: 'RUN_TESTS_TON_CLIENT_JS',
                            value: true
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
                        ],
                        [
                            $class: 'BooleanParameterValue',
                            name: 'RUN_TESTS_TON_CLIENT_NODE_JS',
                            value: true
                        ],
                        [
                            $class: 'StringParameterValue',
                            name: 'ton_client_node_js_branch',
                            value: "master"
                            // value: "${GIT_BRANCH}" ==~ /\d+\.\d+\.\d+-rc/ ? "${GIT_BRANCH}" : "master"
                        ],
                        [
                            $class: 'BooleanParameterValue',
                            name: 'RUN_TESTS_TON_CLIENT_WEB_JS',
                            value: true
                        ],
                        [
                            $class: 'StringParameterValue',
                            name: 'ton_client_web_js_branch',
                            value: "master"
                            // value: "${GIT_BRANCH}" ==~ /\d+\.\d+\.\d+-rc/ ? "${GIT_BRANCH}" : "master"
                        ],
                        [
                            $class: 'BooleanParameterValue',
                            name: 'CHANGE_JS_DEPS',
                            value: true
                        ],
                        [
                            $class: 'BooleanParameterValue',
                            name: 'RUN_TESTS_TON_SURF',
                            value: G_is_PR_to_master ? true : false
                        ],
                        [
                            $class: 'BooleanParameterValue',
                            name: 'USE_TESTNET',
                            value: G_is_PR_to_master ? true : false
                        ],
                    ] 

                    build job: "Integration/integration-tests/master", parameters: params
                }
            }
        }
    }
}
