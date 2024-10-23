<script setup lang="ts">
import Column from '~/components/Column.vue';
import Subtitle from '~/components/Subtitle.vue';
import Text from '~/components/Text.vue';
import Title from '~/components/Title.vue';


</script>

<template>
    <Column :date="'10.10.10'"
        image="https://i.ibb.co/T01Ctjw/4.jpg" title="🍻🍻🍻"
        :comments="[
            {
                author: 'Andrey Bubin',
                content: '12 years? Just like my stretch for Article 105. More time to go!',
                avatar: 'https://i.ibb.co/Gx3BbSn/1.jpg'
            }
        ]">
        <Text>
            Hi from a former beer alcoholic, with about 12 years of experience. At first, I only drank on weekends, then
            I thought one or two cans on weekdays wouldn’t hurt. Later, it turned out that 4-6 cans on weekdays was fine
            too. You sleep well, evenings are always fun—beer, braided cheese, smoked or dried fish or meat, something
            crunchy like chips or croutons. Sometimes I’d top it off with whiskey or a cocktail (I had a minibar at
            home—I took my "hobby" seriously and had no problem spending my whole salary on it. I should mention that I
            don’t have a wife, girlfriend, or kids). Even my stomach didn’t give me trouble—everything cleared out in
            the morning, and I felt as strong as an ox. I got used to my belly, and even heartburn became a part of me.
            Overall, life was great.
        </Text>
        <Text>
            But then, one day, I realized that I didn’t care about anything except beer. I spent all day at work just
            waiting for it to end so I could go home and drink. To give you an idea—smiling at someone was hard, even
            though my job involves dealing with people. But at home, after 3-4 cans, I could actually laugh at a comedy
            or a funny video. This was the first wake-up call for my inner alcoholic.
        </Text>
        <Text>
            The second sign was a low paycheck without bonuses (just a bad month, nothing I could do), and I realized I
            couldn’t get through the month with my drinking habits. I’d already had to cut back here and there, but I
            never thought about giving up my favorite beer. This time, though, I decided to try reading The Easy Way to
            Stop Drinking by Allen Carr (by the way, the guy’s a great psychologist and can definitely help, but only if
            you really want to quit). I thought, if I quit, great, and if not, I’ve got nothing to lose. That’s how I
            started quitting in February this year.
        </Text>
        <Text>
            The first month, I just lay on the couch staring at the ceiling—it was insanely boring, and I had nothing to
            do. Movies didn’t seem interesting, shows were stupid, and videos that used to be funny just annoyed me. But
            two things helped me get through it. First, I convinced myself that I didn’t need alcohol, I just needed a
            tasty drink in the evening. So, I kept having my evening snacks—chips, chechel cheese, and... Coca-Cola.
            Laugh if you want, but 1) it’s not alcohol, and 2) the caffeine in the soda gave me a little energy boost.
            Sure, it’s not the same, but it helped me survive the first 2-3 months until the cravings got easier. And
            the cravings were strong—just thinking about beer would make me drool, like I hadn’t eaten in two days and
            smelled a barbecue.
        </Text>
        <Text>
            The second thing that helped was exercise. I didn’t know what to do with myself, as I said—movies and videos
            didn’t interest me—but I had an old rusty 10-kg dumbbell at home. Yeah, I know, exercise isn’t for everyone;
            it’s hard and not always fun, but it DISTRACTS you. It keeps your shaky hands and busy thoughts. At first, I
            only did it to pass the time and blow off steam, until one day, a coworker said I looked like I’d bulked up
            a bit. That was a huge compliment, especially since I’d only been at it for about three months, but man, did
            it boost my confidence! I still work out, and now I can’t imagine my life without it.

            I just wanted to leave a comment, but it turned into a full post. Never written this much before. If you
            made it to the end, give me a like or something—it took me a whole hour to write this :)
        </Text>
    </Column>
    <Column :date="'10.10.10'"
        image="https://i.etsystatic.com/35330447/r/il/c345ab/5445145409/il_fullxfull.5445145409_i5f2.jpg" title="GOLANG!!!"
        :comments="[
            {
                avatar: 'https://i.ibb.co/NFxpXLp/3.jpg',
                author: 'Furry Quadrober',
                content: 'Why not use Rust instead?',
            },
            {
                author: 'Ramzan Kadyrov',
                avatar: 'https://i.ibb.co/ZNkLGBG/2.jpg',
                content: `Akhmat's got the strength, don!`,
            }
        ]">
        <Subtitle> A Few Thoughts on Golang: Notes on the Sidelines</Subtitle>
        <Text>
            Golang, or simply Go, is one of those languages I stumbled upon when I needed to develop a high-performance
            web application. Initially, it was a small project, but it required maximum efficiency. Python and Java,
            which we had been using, started to lag in terms of speed. That's when someone on the team suggested trying
            Go. I opened the documentation, and within a couple of days, I was coding with it.
        </Text>
        <Text>
            Go impressed me with its simplicity. It's like C, but much more "digestible." Compilation is instantaneous,
            as is the development process itself: no fuss with libraries, simple memory management, and concurrency
            tools right out of the box. Honestly, I got hooked.
        </Text>
        <Subtitle>Working with Goroutines</Subtitle>
        <Text>
            The essence of Go lies in its simplicity in handling concurrency. Goroutines are lightweight threads that
            are easy to create and manage. Instead of heavy OS threads, goroutines use minimal resources. I once tested
            a Go-based server handling thousands of connections simultaneously. What would take dozens of lines in other
            languages fit into a couple of lines using go func() in Go.
        </Text>
        <Text>
            However, there’s a catch—working with channels. Channels in Go are the means for goroutines to communicate.
            At first, it seems tricky, but once you understand how they work, they become a powerful tool. Still, one
            must be cautious with race conditions; without proper synchronization, you can easily run into subtle bugs.
        </Text>
        <Subtitle>Memory Management</Subtitle>
        <Text>
            Go uses automatic garbage collection. On the one hand, this takes away many of the headaches found in
            languages with manual memory management like C or C++. On the other hand, sometimes the garbage collector
            (GC) can become a performance bottleneck. For instance, I encountered a situation where frequent function
            calls led to delays due to garbage collection. This forced me to revisit the architecture and optimize the
            number of objects being created.</Text>

        <Subtitle>No Exceptions</Subtitle>
        <Text>
            Go doesn't have the familiar try-catch exception handling that many languages offer. Instead, it relies on
            explicit error checking. At first, it feels tedious—writing error checks (if err != nil) after every few
            lines. But over time, you get used to it. In fact, it makes the code more transparent: every error is
            handled right then and there, and it’s clear where things can go wrong.
        </Text>
        <Subtitle>Why You Should Try Go</Subtitle>
        <Text>
            Go isn’t just a language for building high-performance systems. It’s also an excellent choice for small
            utilities and microservices. It's easy to learn and allows you to write high-quality code quickly. Go is
            ideal for cases where you need maximum speed without diving into low-level optimizations. It strikes the
            right balance between performance and development ease.
        </Text>
        <Text>
            In the end, learning Go became a great way for me to step out of my comfort zone and try something that just
            "works."
        </Text>
    </Column>

</template>
