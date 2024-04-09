#Start Linkaform X Server



docker network create -d bridge --gateway 172.13.5.1 --subnet 172.13.5.0/16 linkaform
