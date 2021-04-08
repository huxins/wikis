# sql

**DDL**

create

```sql
create table mytab (column1 VARCHAR(100),column2 INT);
create table newtable AS select * from mytab;
create database mydb;
```

alter

```sql
alter table mytab add COLUMN column3 int DEFAULT '默认' COMMENT '备注' AFTER test;
alter table mytab drop COLUMN column3;
alter table mytab alter COLUMN column3 type varchar(100);
```

drop

```sql
drop table mytab;
drop database mydb;
```

**DML**

insert

```sql
insert into mytab (column1, column2) values ('abc',123);
insert into mytab values ('abc',123),('abc',456);
insert into mytab select name FROM yourtab;
```

update

```sql
update mytab set column1 = 'abc',column2 = 123 where column1 = 'def';
```

delete

```sql
delete from mytab where compid = 'compid';
delete from mytab;
truncate table mytab;
```

**DQL**

select

```sql
select * from mytab;
select distinct column1, column2 from mytab;
select * into newtable from mytab;
```


