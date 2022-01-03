#!/bin/bash

a=0

while [ $a -lt 100 ]
do
   node greeter_client.js --target localhost:8000
   a=`expr $a + 1`
done