# ScheduledThreadPoolExecutor

- [并发编程 —— ScheduledThreadPoolExecutor](https://juejin.im/post/5ae75604f265da0ba56753cd)

## API

- ScheduledThreadPoolExecutor：API接口。
- DelayedWorkQueue ： 存储任务的队列。
- ScheduledFutureTask ： 执行任务的线程。

### 构造方法

```java
// 使用给定核心池大小创建一个新 ScheduledThreadPoolExecutor。
ScheduledThreadPoolExecutor(int corePoolSize)  
// 使用给定初始参数创建一个新 ScheduledThreadPoolExecutor。
ScheduledThreadPoolExecutor(int corePoolSize, RejectedExecutionHandler handler)  
// 使用给定的初始参数创建一个新 ScheduledThreadPoolExecutor。
ScheduledThreadPoolExecutor(int corePoolSize, ThreadFactory threadFactory)  
// 使用给定初始参数创建一个新 ScheduledThreadPoolExecutor。
ScheduledThreadPoolExecutor(int corePoolSize, ThreadFactory threadFactory, RejectedExecutionHandler handler)
```

`ScheduledThreadPoolExecutor` 最多支持 3 个参数：核心线程数量，线程工厂，拒绝策略。

常用方法

```java
// 使用给定核心池大小创建一个新 ScheduledThreadPoolExecutor。
ScheduledThreadPoolExecutor(int corePoolSize)  

// 创建并执行在给定延迟后启用的一次性操作。  
ScheduledFuture<?>	schedule(Runnable command, long delay, TimeUnit unit) 
  
// 创建并执行一个在给定初始延迟后首次启用的定期操作，后续操作具有给定的周期；也就是将在 initialDelay 后开始执行，然后在 initialDelay+period 后执行，接着在 initialDelay + 2 * period 后执行，依此类推。 
ScheduledFuture<?>	scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit) 

// 创建并执行一个在给定初始延迟后首次启用的定期操作，随后，在每一次执行终止和下一次执行开始之间都存在给定的延迟。       
ScheduledFuture<?>	scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)
```


