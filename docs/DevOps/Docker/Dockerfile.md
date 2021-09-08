# Dockerfile

- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)

## COPY

- 多阶段构建，Docker version 17.05

  - 多阶段构建，匿名阶段

  ```dockerfile
  FROM alpine:3.13
  FROM alpine:3.13
  COPY --from=0 /usr/local/app .
  ```

  - 多阶段构建，命名阶段

  ```dockerfile
  FROM alpine:3.13 AS builder
  FROM alpine:3.13
  COPY --from=builder /usr/local/app .
  ```

## CMD

- `CMD ["executable", "param1", "param2"]` (*exec* form, this is the preferred form)
- `CMD ["param1", "param2"]` (as *default parameters to ENTRYPOINT*)
- `CMD command param1 param2` (*shell* form)

## ENTRYPOINT

- `ENTRYPOINT ["executable", "param1", "param2"]` (*exec* form, this is the preferred form)
- `ENTRYPOINT command param1 param2` (*shell* form)

