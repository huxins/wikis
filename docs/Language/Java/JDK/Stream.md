# Stream

- [Java 8 中的 Streams API 详解](https://developer.ibm.com/zh/articles/j-lo-java8streamapi/)
- [深入理解Java Stream流水线](https://www.cnblogs.com/CarpenterLee/p/6637118.html)
- [Java 8系列之重构和定制收集器](https://blog.csdn.net/io_field/article/details/54971555)

## create

```java
List<String> list = new ArrayList<>();
// 从集合创建
Stream<String> stream = list.stream();
Stream<String> stream = list.parallelStream();
// 从数组创建
IntStream stream = Arrays.stream(new int[]{2, 3, 5});
// 创建数字流
IntStream intStream = IntStream.of(1, 2, 3);
IntStream intStream = IntStream.of(1, 2, 3).parallel();
// 使用random创建
IntStream limit = new Random().ints().limit(10);
// generate
Stream.generate(java.lang.Math::random)
    .limit(10).forEach(System.out::println);
// iterate
Stream.iterate(1, item -> item + 1).limit(10).forEach(System.out::println);
// 合并
Stream.concat(Stream.of(1, 2, 3), Stream.of(4, 5))
    .forEach(System.out::println);
```

## operation

### filter

该操作会接受一个返回 boolean 的函数作为参数，并返回一个包含所有符合该条件的流。

```java
stream()
    .filter(word -> word.startsWith("w"))
    .forEach(System.out::println);
```

### distinct

该操作会返回一个元素各异（根据流所生成的元素的 hashCode 和 equals 方法实现）的流。

```java
numbers
    .stream()
    .filter(integer -> integer % 2 == 0)
    .distinct()
    .forEach(System.out::println);
```

### limit

该方法会返回一个不超过给定长度的流，所需长度需要作为参数传递给 limit。

```java
numbers
    .stream()
    .filter(integer -> integer % 2 == 0)
    .limit(3)
    .forEach(System.out::println);
```

### skip

返回一个扔掉了前 n 个元素的流。如果流中元素不足 n 个，则返回一个空流。

```java
numbers
    .stream()
    .filter(integer -> integer % 2 == 0)
    .skip(2)
    .forEach(System.out::println);
```

### map

接受一个函数作为参数。这个函数会被应用到每个元素身上。

```java
numbers
    .stream()
    .map(Words::getContent)
    .forEach(System.out::println);
```

### flatMap

```java
words.stream()
    .map(s -> s.split(""))
    .flatMap(Arrays::stream)
    .distinct()
    .collect(Collectors.toList())
    .forEach(System.out::println);
```

### peek

生成一个包含原 Stream 的所有元素的新 Stream，同时会提供一个消费函数

```java
Stream.of(1, 2, 3, 4, 5)
        .peek(integer -> System.out.println("accept:" + integer))
        .forEach(System.out::println);
```

### sorted

对原Stream进行排序，返回一个有序列的新Stream。可接收自定义排序规则函数 Comparator，可按照意愿排序。

```java
Stream.of(5, 4, 3, 2, 1)
        .sorted()
        .forEach(System.out::println);

list.stream()
    .sorted(Comparator.comparing(IntroductionVideoPageDTO::getSort))
    .collect(Collectors.groupingBy(IntroductionVideoPageDTO::getDataId));
```

### match

allMatch、anyMatch、noneMatch、findFirst 和 findAny

```java
if (numbers.stream().anyMatch(i -> i % 2 == 0)) {
    System.out.println("集合里有偶数!");
}

Optional<Integer> firstSquareDivisibledByThree =
        numbers.stream()
               .map(x -> x * x)
               .filter(x -> x % 3 == 0)
               .findFirst();
System.out.println(firstSquareDivisibledByThree.get());
Stream.of(w1, w2, w3, w4, w5).allMatch(List.of("0", "1")::contains);
```

### reduce

将流中的元素结合起来，得到一个值。这样的查询可以被归类为归约操作。

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream().reduce(0, (a, b) -> a + b);
int sum = numbers.stream().reduce(0, Integer::sum);
```

无初始值

```java
Optional<Integer> sum = numbers.stream().reduce(Integer::sum);
```

### mapToInt

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
IntSummaryStatistics stats = numbers.stream().mapToInt((x) -> x).summaryStatistics();
System.out.println("列表中最大的数 : " + stats.getMax());
System.out.println("列表中最小的数 : " + stats.getMin());
System.out.println("所有数之和 : " + stats.getSum());
System.out.println("平均数 : " + stats.getAverage());
```

## final

### collect

```java
// 返回一个集合
Stream.of(1, 2, 2, 4, 5).collect(Collectors.toList());
Stream.of(1, 2, 2, 4, 5).collect(Collectors.toSet());
Stream.of(1, 2, 2, 4, 5).collect(Collectors.toCollection(TreeSet::new));
books.stream().collect(Collectors
                       .toMap(Book::getIsbn
                              , Book::getName)
                       ,(existing, replacement) -> existing));
// 合并为一个字符串
strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.joining(", "));
// 分割数据块
Stream.of(1, 2, 3, 4)
                .collect(Collectors.partitioningBy(it -> it % 2 == 0
                                                  ,Collectors.counting()));
// 数据分组
Stream.of(1, 2, 3, 4)
                .collect(Collectors.groupingBy(it -> it > 3));
// 数据分组后value集合再map
Map<Integer, List<String>> resultList =
	couponList.stream()
    .collect(Collectors.groupingBy
             (Coupon::getCouponId,Collectors.mapping
              (Coupon::getName,Collectors.toList())));
```

### forEach

```java
Random random = new Random();
random.ints().limit(10).forEach(System.out::println);
```

### forEachOrdered

会按照预先设定的顺序执行（Stream是无序的），默认为元素插入的顺序。

```java
Stream.of(5,2,1,4,3)
        .forEachOrdered(integer -> {
            System.out.println("integer:"+integer);
        });
```

### count

```java
List<String> strings = Arrays.asList("hollis","Hollis666", "Hello", "HelloWorld", "Hollis");
System.out.println(strings.stream().count());
```

### max

```java
Optional<Integer> max = Stream.of(1, 2, 3, 4, 5)
        .max((o1, o2) -> o1 - o2);
```

### min

```java
Optional<Integer> min = Stream.of(1, 2, 3, 4, 5)
        .max((o1, o2) -> o2 - o1);
```

