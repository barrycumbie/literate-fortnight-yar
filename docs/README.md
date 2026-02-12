# literate-fortnight-yar
Cumbie full rebuild of devops ci/cd 

## walkthrough videos (how this repo/app was made) 

### full stack walk through one of three | 16:30
> https://youtu.be/YqFhC7tRiMI
- from a new gh repo (readme, node .gitignore, & license), 
- to git clone & code ., 
- npm init -y with simple express server & test local 
- then push to gh
- on gh, new dev branch
- to render dot com for a dev app from dev branch
- new gcp project, compute engine api, VM instance
- fight zone bug when not working, select smallest
- enable http & https, get a static external ip  


###full stack walk through two of three | 34:25
> https://youtu.be/19nzDPMVmPg
- update DNS with subdomain, marked in readme.
- ssh cloud, gen a key, put in gcp vm instance, put in gh secrets
- in ssh, update machine and install packages 
- set up nginx reverse proxy 
- clone repo, install dependencies, test 
- get pm2 running   
- install & config ssl cert

### full stack walk through three of three | 8:15
> https://youtu.be/U4QUbJYXXSg
- set up cd workflow



## infrastrucutre 

- this repo: https://github.com/barrycumbie/literate-fortnight-yar
- main|repo: => gcp
  - external static gcp ip: 34.106.229.37
  - subdomain: yar
  - full domain:
    - yar.barrycumbie.com
    - https://yar.barrycumbie.com 
- dev|repo: https://literate-fortnight-yar.onrender.com
  - dev branch => render

