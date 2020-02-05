G_giturl = "git@github.com:tonlabs/ton-client-js.git"
G_gitcred = 'TonJenSSH'
pipeline {
    agent {
        docker {
            image 'node:10-buster' 
        }
    }
 
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
                        ],
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
                    ] 

                    build job: "Integration/integration-tests/master", parameters: params
                }
            }
        }
        stage('publish to npm') { 
            when {
                expression {
                    GIT_BRANCH == 'master' 
                }
            }
            steps {    
                script {
                    ton_directory = "~/workdir/ton-client-js-npm"
                    sh '[ -d ~/.ssh ] || mkdir -v ~/.ssh'
                    sh 'ssh-keyscan github.com >> ~/.ssh/known_hosts'
                    sshagent([G_gitcred]) {
                        sh """
                            rm -rf $ton_directory
                            mkdir -pv $ton_directory
                            git clone $G_giturl $ton_directory --single-branch
                        """
                    }      
                    withCredentials([string(
                                credentialsId: 'npmJS_token',
                                variable: 'NPM_TOKEN')]) {
                        sh """
                            cd $ton_directory
                            echo //registry.npmjs.org/:_authToken=${env.NPM_TOKEN} > .npmrc
                            npm install
                            npm run babel
                            npm publish
                        """
                    }      
                }
            }
        }
    }
}
