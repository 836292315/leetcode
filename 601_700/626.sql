# Write your MySQL query statement below
select (case
    when mod(id, 2) != 0 and records != id then id + 1
    when mod(id, 2) != 0 and records = id then id
    else id - 1
end) as id, student
from seat, (select count(*) as records from seat) as seat_records
order by id asc;