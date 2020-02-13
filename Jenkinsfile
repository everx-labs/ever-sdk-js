def getVar(Gvar) {
    return Gvar
}
def checkAndCreateBranch(ton_client_url) {
    ton_repo_name = ton_client_url.substring(ton_client_url.lastIndexOf('/') + 1, ton_client_url.lastIndexOf('.') )
    ton_client_path = "~/workdir/${ton_repo_name}-version"
    ton_client_js_path = "git+ssh://git@github.com/tonlabs/ton-client-js.git#${G_binversion}-rc"
    ton_client_nodejs_path = "git+ssh://git@github.com/tonlabs/ton-client-node-js.git#${G_binversion}-rc"
    return sh (script:  """
        rm -rf $ton_client_path
        mkdir -pv $ton_client_path
        git clone $ton_client_url $ton_client_path
        cd $ton_client_path
        if (git ls-remote --heads --exit-code $ton_client_url ${GIT_BRANCH})
        then
            echo "Branch name ${GIT_BRANCH} in $ton_client_url already exists."
        else
            echo "Branch ${GIT_BRANCH} in $ton_client_url was created."
            git checkout -b ${GIT_BRANCH}

            case ${ton_repo_name} in

            "ton-client-node-js")
                sed -i 's@"version"\\s*:\\s*"[0-9]*\\.[0-9]*\\.[0-9]*"@"version": "${G_binversion}"@g' package.json
                sed -i 's@"ton-client-js"\\s*:\\s*"^[0-9]*\\.[0-9]*\\.[0-9]*"@"ton-client-js": "^${ton_client_js_path}"@g' package.json
            ;;

            "ton-client-web-js")
                sed -i 's@"version"\\s*:\\s*"[0-9]*\\.[0-9]*\\.[0-9]*"@"version": "${G_binversion}"@g' package.json
                sed -i 's@"ton-client-js"\\s*:\\s*"^[0-9]*\\.[0-9]*\\.[0-9]*"@"ton-client-js": "^${ton_client_js_path}"@g' package.json
            ;;  

            "ton-client-react-native-js")
                sed -i 's@"version"\\s*:\\s*"[0-9]*\\.[0-9]*\\.[0-9]*"@"version": "${G_binversion}"@g' package.json
                sed -i 's@"ton-client-js"\\s*:\\s*"^[0-9]*\\.[0-9]*\\.[0-9]*"@"ton-client-js": "^${ton_client_js_path}"@g' package.json
            ;;

            *)
                echo "Error no ${ton_repo_name}"
            ;;
            esac
            git add .
            git commit -m 'automate Jenkins branch ${GIT_BRANCH}'
            git push --set-upstream origin ${GIT_BRANCH}
            echo "Branch ${GIT_BRANCH} in $ton_client_url was created."
        fi
    """ ,  returnStdout: true).trim()
}

pipeline {
    agent any
    options { 
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')
        disableConcurrentBuilds()
        parallelsAlwaysFailFast()
    }
    stages {
        stage("Build info") {
            steps {
                script {
                    def buildCause = currentBuild.getBuildCauses()
                    echo "buildCause: ${buildCause}"

                    C_TEXT = """
                        Job: ${JOB_NAME}
                        Build cause: ${buildCause.shortDescription[0]}
                    """
                    C_PROJECT = GIT_URL.substring(19,GIT_URL.length()-4)
                    echo C_PROJECT
                    echo C_TEXT
                    currentBuild.description = C_TEXT
                    echo "GIT_BRANCH ${GIT_BRANCH}"
                    def match =  (GIT_BRANCH =~ /(\d*\.\d*\.\d*)-rc/)
                    G_binversion =  match ? match[0][1] : '' 
                }
            }
        }
        stage('Run tests') {
            steps {
                echo "Job: ${JOB_NAME}"
                script {
                    def params = [
                        // [
                        //     $class: 'StringParameterValue',
                        //     name: 'dockerimage_compilers',
                        //     value: "tonlabs/compilers:latest"
                        // ],
                        // [
                        //     $class: 'StringParameterValue',
                        //     name: 'dockerimage_local_node',
                        //     value: "tonlabs/local-node:latest"
                        // ],
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
        stage('Check branch in ton-client-node-js') {
            agent any
            when {
                expression {
                    GIT_BRANCH == "${getVar(G_binversion)}-rc"
                }
            }
            steps {
                script {
                    sshagent (credentials: [G_gitcred]) {
                        checkAndCreateBranch("git@github.com:tonlabs/ton-client-node-js.git")
                    }
                }
            }
        }

        stage('Check branch in ton-client-web-js') {
            agent any
            when {
                expression {
                    GIT_BRANCH == "${getVar(G_binversion)}-rc"
                }
            }
            steps {
                script {
                    sshagent (credentials: [G_gitcred]) {
                        checkAndCreateBranch("git@github.com:tonlabs/ton-client-web-js.git")
                    }
                }
            }
        }
        stage('Check branch in ton-client-react-native-js') {
            agent any
            when {
                expression {
                    GIT_BRANCH == "${getVar(G_binversion)}-rc"
                }
            }
            steps {
                script {
                    sshagent (credentials: [G_gitcred]) {
                        checkAndCreateBranch("git@github.com:tonlabs/ton-client-react-native-js.git")
                    }
                }
            }
        }
    }
}
