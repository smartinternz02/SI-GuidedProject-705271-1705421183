<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description></description>
   <name>TSC_Amazon_SignIn_Category_001</name>
   <tag></tag>
   <delayBetweenInstances>0</delayBetweenInstances>
   <executionMode>SEQUENTIAL</executionMode>
   <maxConcurrentInstances>8</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>false</requireConfigurationData>
            <runConfigurationId>Chrome</runConfigurationId>
         </configuration>
         <runEnabled>false</runEnabled>
         <testSuiteEntity>Test Suites/Amazon_TestSuite/TS_Amazon_SignIn_001</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>false</requireConfigurationData>
            <runConfigurationId>Chrome</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/Amazon_TestSuite/TS_Amazon_CategorySearch_002</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
