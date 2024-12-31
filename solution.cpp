```cpp
#include <iostream>
#include <future>
#include <thread>

std::promise<int> prom;

void printGlobalPromise() {
    std::future<int> fut = prom.get_future();
    int x = fut.get();
    std::cout << "value: " << x << '\n';
}

int main() {
    std::thread th1(printGlobalPromise);
    prom.set_value(10);
    th1.join();
    return 0;
}
```