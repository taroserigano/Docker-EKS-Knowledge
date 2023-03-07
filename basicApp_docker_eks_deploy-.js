

1. mvn clean install 
-create docker image 

2. docker run -p 8080:8080  taroserigano/hello-world-rest-api:0.0.4-SNAPSHOT                     

3. push to docker hub account
- docker push taroserigano/hello-world-rest-api:0.0.4-SNAPSHOT  





FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ADD target/*.jar app.jar
ENTRYPOINT [ "sh", "-c", "java -jar /app.jar" ]


<!-- Docker -->
			<plugin>
				<groupId>com.spotify</groupId>
				<artifactId>dockerfile-maven-plugin</artifactId>
				<version>1.4.8</version>
				<executions>
					<execution>
						<id>default</id>
						<goals>
							<goal>build</goal>
							<!-- <goal>push</goal> -->
						</goals>
					</execution>
				</executions>
				<configuration>
					<repository>taroserigano/${project.name}</repository>
					<tag>${project.version}</tag>
					<skipDockerInfo>true</skipDockerInfo>
				</configuration>
			</plugin>









LOGIN

aws config

enter access key ID and secret ID 

eksctl create cluster --name=eksdemo1  --region=us-east-1    --zones=us-east-1a,us-east-1b  --without-nodegroup 



# Create Cluster
eksctl create cluster --name=eksdemo1 \
                      --region=us-east-1 \
                      --zones=us-east-1a,us-east-1b \
                      --without-nodegroup 

# Get List of clusters
eksctl get cluster      


ONCE YOU DEPLOY ON DOCKER HUB, 
the process is straight-forward, 

PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl create deployment hello-world taroserigano/hello-world-rest-api:0.0.4-SNAPSHOT
error: required flag(s) "image" not set
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl create deployment hello-world --image=taroserigano/hello-world-rest-api:0.0.4-SNAPSHOT
deployment.apps/hello-world created
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl get deployment
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
hello-world   0/1     1            0           13s
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl get replicaset
NAME                     DESIRED   CURRENT   READY   AGE
hello-world-55bfd8d747   1         1         0       28s
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl get pod
NAME                           READY   STATUS    RESTARTS   AGE
hello-world-55bfd8d747-gh4l8   0/1     Pending   0          41s
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl expose deployment hello-world-rest-api --type=LoadBalancer --port=8080
Error from server (NotFound): deployments.apps "hello-world-rest-api" not found
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl expose deployment hello-world-rest-api --type=LoadBalancer --port=8080
Error from server (NotFound): deployments.apps "hello-world-rest-api" not found
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl get svc
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.100.0.1   <none>        443/TCP   77m
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl create deployment todowebapp-h2 --image=taroserigano/todo-web-application-h2:0.0.1-SNAPSHOT
deployment.apps/todowebapp-h2 created
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl expose deployment todowebapp-h2 --type=LoadBalancer --port=8080
service/todowebapp-h2 exposed
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> get svc
get : The term 'get' is not recognized as the name of a
cmdlet, function, script file, or operable program. Check
the spelling of the name, or if a path was included, verify
that the path is correct and try again.
At line:1 char:1
+ get svc
+ ~~~
    + CategoryInfo          : ObjectNotFound: (get:String)
   [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl get svc
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP                                                             PORT(S)          AGE
kubernetes      ClusterIP      10.100.0.1      <none>                                                                  443/TCP          81m
todowebapp-h2   LoadBalancer   10.100.117.23   a32e5739a96bd49a192654c539490697-57254456.us-east-1.elb.amazonaws.com   8080:32542/TCP   29s
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl create deployment hello-world-rest-api --image=taroserigano/hello-world-rest-api:0.0.4.SNAPSHOT
deployment.apps/hello-world-rest-api created
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl expose deployment hello-world-rest-api --type=LoadBalancer --port=8080
service/hello-world-rest-api exposed
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api> kubectl get svc
NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP
      PORT(S)          AGE
hello-world-rest-api   LoadBalancer   10.100.104.146   a1e8dace8d3924cccb683b5c010d5827-667176710.us-east-1.elb.amazonaws.com   8080:30288/TCP   7s
kubernetes             ClusterIP      10.100.0.1       <none>
      443/TCP          83m
todowebapp-h2          LoadBalancer   10.100.117.23    a32e5739a96bd49a192654c539490697-57254456.us-east-1.elb.amazonaws.com    8080:32542/TCP   3m21s
PS C:\Users\taroseri\Documents\TEMP\kubernetes-crash-course-master\01-hello-world-rest-api>
























