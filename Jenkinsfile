pipeline 
{
    agent any
    stages
    {
        stage('Build')
        {
            steps {
            
	            echo "*** Building ${env.JOB_NAME} ***"
    		    sh '''
    		        #!/bin/bash
    		        echo "Nothing to do. This is only static html."
    		        echo "Build of nanoboot-org was successful"
    		        '''
            }
        }
        
        stage('Deploy')
        {
            steps {
                echo "*** Deploying ${env.JOB_NAME} ***"
              
    		    sh '''
    		        #!/bin/bash

    		        if [ -z "$WWW_ROOT_DIR" ]
                        then
                              echo "KO : Variable WWW_ROOT_DIR is empty. You fix this issue by adding this variable to section 'environment' of this Jenkinsfile"
                              exit 1
                        else
                              echo "OK : Variable WWW_ROOT_DIR is NOT empty"
                        fi
                        
                    if [ -z "$WWW_TEST_ROOT_DIR" ]
                        then
                              echo "KO : Variable WWW_TEST_ROOT_DIR is empty. You fix this issue by adding this variable to Jenkins configuration"
                              exit 1
                        else
                              echo "OK : Variable WWW_TEST_ROOT_DIR is NOT empty"
                        fi
		        
    		        case $BRANCH_NAME in

    		          master)
                        echo Branch $BRANCH_NAME is supported. Continuing.
                        rsync --exclude '.git/*' -vaz ./ $WWW_ROOT_DIR
                        echo "Deployment of documentation was successful. Env=production"
        		        ;;
    		        
      		          develop | jenkins)
        		        echo Branch $BRANCH_NAME is supported. Continuing.
                        rsync --exclude '.git/*' -vaz ./ $WWW_TEST_ROOT_DIR
                        echo "Deployment of documentation was successful. Env=test"
        		        ;;
    		        
      		        *)
        		        echo Branch $BRANCH_NAME is not supported. A failure happened. Exiting.
                        exit 1
        		        ;;
    		        esac
                                            
    

    		       '''
	          
            }
        }
    }
}

