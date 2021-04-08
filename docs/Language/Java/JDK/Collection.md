# Collection

## method

```java
// 防止返回Null
list = Optional.ofNullable(list).orElse(Collections.emptyList());
// 仅保留此 collection 中那些也包含在指定 collection 的元素
retainAll(Collection<?> c);
// 删除元素
remove("b");
// 清空集合
clear();
// 集合转数组
toArray();
// 随机打乱集合顺序
Collections.shuffle(list);
// 反转
Collections.reverse(list);
// 排序
Collections.sort(list);
// 二分查找
Collections.binarySearch(list, 16);
```

## iterator

为什么继承 Iterable 接口而不继承 Iterator ?

因为 Iterator 接口的核心方法 next() 或者 hasNext() 是依赖于迭代器的当前迭代位置的。 如果 Collection 直接实现 Iterator 接口，势必导致集合对象中包含当前迭代位置的数据 (指针)。当集合在不同方法间被传递时，由于当前迭代位置不可预置，那么 next() 方法的结果会变成不可预知。 除非再为 Iterator 接口添加一个 reset() 方法，用来重置当前迭代位置。但即使这样，Collection 也只能同时存在一个当前迭代位置。而 Iterable 则不然，每次调用都会返回一个从头开始计数的迭代器。多个迭代器是互不干扰的。

```java
Iterator it = al.iterator();
while(it.hasNext())
{
    it.remove();
    System.out.println(it.next());
}
```

ListIterator 是 Iterator 的子接口，可以逆向遍历

```java
ListIterator it = c.listIterator();
while(it.hasNext()){
    System.out.println(it.next());
}
// 你必须在正向遍历之后才能逆向
while(it.hasPrevious()){
    System.out.println(it.previous());
}
```

## list

### arrayList

数组实现，查询快，增删慢

```java
// 预先设置 list 的大小
list.ensureCapacity(N);
```

### linkedList

链表实现，查询慢，增删快

```java
// 获取第一个元素
list.getFirst();
// 获取最后一个元素
list.getLast();
```

## set

### hashset

[为什么要重写 hashcode 和 equals 方法？](https://zhuanlan.zhihu.com/p/61307537)

重写 hashCode 的目的：保证相同的对象会有相同的 hashcode。
重写 equals 的目的：让两个引用地址不一样，但内容一样的对象是相等的。

### treeset

TreeSet 是用来排序的，可以指定一个顺序，对象存入之后会按照指定的顺序排列。

- 自然顺序 (Comparable)

TreeSet 类的 add() 方法中会把存入的对象提升为 Comparable 类型
调用对象的 compareTo() 方法和集合中的对象比较
根据 compareTo() 方法返回的结果进行存储

```java
public int compareTo(Person o) {
    return 0;                //当compareTo方法返回0的时候集合中只有一个元素
    return 1;                //当compareTo方法返回正数的时候集合会怎么存就怎么取
    return -1;               //当compareTo方法返回负数的时候集合会倒序存储
}
```

- 比较器顺序 (Comparator)

创建 TreeSet 的时候可以制定 一个 Comparator
如果传入了 Comparator 的子类对象, 那么 TreeSet 就会按照比较器中的顺序排序
add() 方法内部会自动调用 Comparator 接口中 compare() 方法排序
调用的对象是 compare 方法的第一个参数，集合中的对象是 compare 方法的第二个参数

- 两种方式的区别

TreeSet 构造函数什么都不传，默认按照类中 Comparable 的顺序 (没有就报错 ClassCastException)
TreeSet 如果传入 Comparator, 就优先按照 Comparator

```java
Collections.sort(temp, new Comparator<DispatchingOrder>() {
    @Override
    public int compare(DispatchingOrder o1, DispatchingOrder o2) {
		// 行号正序
        return o1.getLine() - o2.getLine();
    }
});
```

## copy

### shallow copy

遍历循环复制

```java
List<Person> destList = new ArrayList<>(srcList.size());  
for(Person p : srcList){  
    destList.add(p);  
}
```

类的构造方法

```java
List<Person> destList = new ArrayList<>(srcList);
```

addAll

```java
List<Person> destList = new ArrayList<>();
destList.addAll(srcList);
```

System.arraycopy

```java
Person[] srcPersons = srcList.toArray(new Person[0]);
Person[] destPersons = new Person[srcPersons.length];
System.arraycopy(srcPersons, 0, destPersons, 0, srcPersons.length);
```

### deepcopy

序列化

```java
public static <T> List<T> deepCopy(List<? super T> src) throws IOException, ClassNotFoundException {
    ByteArrayOutputStream byteOut = new ByteArrayOutputStream();
    ObjectOutputStream out = new ObjectOutputStream(byteOut);
    out.writeObject(src);

    ByteArrayInputStream byteIn = new ByteArrayInputStream(byteOut.toByteArray());
    ObjectInputStream in = new ObjectInputStream(byteIn);
    @SuppressWarnings("unchecked")
    List<T> dest = (List<T>) in.readObject();
    return dest;
}

List<Person> destList=deepCopy(srcList);
```

clone

```java
public class A implements Cloneable {
    public String[] name;
    public A() {
        name = new String[2];
    }
    public Object clone() {
        A o = null;
        try {
            o = (A) super.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return o;
    }
}

for(int i=0;i<n;i++){
    copy.add((A)src.get(i).clone());
}
```

