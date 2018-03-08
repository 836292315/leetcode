select * FROM cinema
where id % 2 = 1
and description != 'boring'
order by rating desc