---
layout: default
title: المقالات
permalink: /مقالات/
---

<div class="container mx-auto px-4 py-12 max-w-6xl">
  <h1 class="text-4xl font-bold mb-12 text-center md:text-right">المقالات</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {% for post in site.posts %}
      <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 rtl-content flex flex-col">
        <!-- Link only for image and content -->
        <a href="{{ post.url }}" class="block flex-grow">
          {% if post.image %}
            <picture>
              <source srcset="{{ post.image | replace: '.jpg', '.webp' | replace: '.png', '.webp' }}" type="image/webp">
              <img 
                src="{{ post.image }}" 
                alt="{{ post.title }}"
                loading="lazy"
                width="400"
                height="267"
                class="w-full h-48 object-cover">
            </picture>
          {% endif %}
          <div class="p-6 flex-grow">
            <h2 class="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.excerpt | strip_html | truncatewords: 25 }}
            </p>
          </div>
        </a>
        
        <!-- Date and category section - NOT part of the link -->
        <div class="mt-auto p-6 pt-0">
          <div class="flex justify-between items-center border-t pt-4">
            <time class="text-sm text-gray-500">
              {{ post.date | date: "%d %B, %Y" }}
            </time>
            {% if post.categories %}
              <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {{ post.categories[0] }}
              </span>
            {% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>