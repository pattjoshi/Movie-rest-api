# Movie-rest-api

### TASK A

1. Connect with MongoDB
2. Create a POST api to save a movie into database.
   POST /add-movie
3. Create a GET api to fetch all the movies stores in the database.
   GET /get-all
4. Create a GET api in which we will send movie id in query param and from backend only single movie having same movie id will be fetched.
   GET /get-single?id={id}
5. Create a GET api to fetch movies using pagination.
   GET /get-paginated?page={page}&size={size}
   Example:
   page=1 size=10 [ Fetch first 10 Records From Collection]
   page=2 size=10 [ Skip first (page-1)\*size records and fetch next 10 records.
   page =5 size=5 [Skip first 25 records and fetch next 5 records]


### add server side pagination
`localhost:5000/get-paginated?page=2&size=10`
<img width="808" alt="image" src="https://user-images.githubusercontent.com/78966839/188427167-c8281fe7-caed-42c1-b2a4-1d72b6b4c528.png">

## All Movi
`localhost:5000/get-all`
<img width="745" alt="image" src="https://user-images.githubusercontent.com/78966839/188427643-31d48e45-f378-4b31-8c4b-09735eb02898.png">

## Single page
`localhost:5000/get-single/631582c5e1cfec5db953e022`

<img width="893" alt="image" src="https://user-images.githubusercontent.com/78966839/188428057-e0efc880-4671-4b98-be25-4255a75ead18.png">

# create movi
`localhost:5000/add-movie/`
<img width="721" alt="image" src="https://user-images.githubusercontent.com/78966839/188428176-742db76f-88a3-4168-bad9-194d871a3af2.png">

# Video
https://user-images.githubusercontent.com/78966839/188484901-8c54390d-bb19-4477-8562-6bdb4a8e2ec5.mp4

### [Video compressor](https://www.veed.io/tools/video-compressor)

