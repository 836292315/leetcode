# Write your MySQL query statement below
select Name as Customers
from Customers
where Id NOT IN (select CustomerId from Orders)