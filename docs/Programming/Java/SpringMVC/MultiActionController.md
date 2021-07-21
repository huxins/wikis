# MultiActionController

> Deprecated as of 4.3, and was removed in 5.x

## Methods

```xml
<bean id="serlvet" class="cn.inxiny.servlet.SerlvetImpl">
    <property name="supportedMethods" value="POST"/>
</bean>
```

## SimpleUrlHandlerMapping

```xml
<bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
    <property name="mappings">
        <props>
            <prop key="/hello">helloController</prop>
        </props>
    </property>
</bean>
```

## InternalPathMethodNameResolver

```xml
<bean name="/hello/**" class="cn.inxiny.servlet.SerlvetImpl">
    <property name="methodNameResolver">
        <bean class="org.springframework.web.servlet.mvc.multiaction.InternalPathMethodNameResolver">
            <property name="prefix" value="test" />
            <property name="suffix" value="World" />
        </bean>
    </property>
</bean>
```

## ParameterMethodNameResolver

```xml
<bean name="/hello" class="cn.inxiny.servlet.SerlvetImpl">
    <property name="methodNameResolver">
        <bean class="org.springframework.web.servlet.mvc.multiaction.ParameterMethodNameResolver">
            <property name="paramName" value="action"/>
            <property name="defaultMethodName" value="execute"/>
            <property name="methodParamNames" value="list,create,update"/>
            <property name="logicalMappings">
                <props>
                    <prop key="create">createLogical</prop>
                </props>
            </property>
        </bean>
    </property>
</bean>
```

## PropertiesMethodNameResolver

```xml
<bean name="/hello/**" class="cn.inxiny.servlet.SerlvetImpl">
    <property name="methodNameResolver">
        <bean class="org.springframework.web.servlet.mvc.multiaction.PropertiesMethodNameResolver">
            <property name="mappings">
                <props>
                    <prop key="/hello/create">create</prop>
                    <prop key="/**">execute</prop>
                </props>
            </property>
        </bean>
    </property>
</bean>
```

