
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { BlogPost } from '@/api/entities';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { BookOpen, Tag } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const defaultPosts = [
    {
      id: "1",
      title: "The Queen of Spices: Understanding Cardamom's Royal Heritage",
      slug: "queen-of-spices-cardamom-heritage",
      excerpt: "Discover why cardamom is called the queen of spices and learn about its journey from the hills of Sirsi to your kitchen.",
      category: "spice_education",
      featured_image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=400&fit=crop&crop=center",
      tags: ["cardamom", "spice education", "health benefits", "sirsi"],
      reading_time: 4,
      publish_date: "2024-01-15"
    },
    {
      id: "2",
      title: "Golden Turmeric: The Ancient Healer in Your Spice Rack",
      slug: "golden-turmeric-ancient-healer",
      excerpt: "Explore the incredible health benefits and culinary uses of turmeric, one of nature's most powerful anti-inflammatory spices.",
      category: "health_benefits",
      featured_image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=400&fit=crop&crop=center",
      tags: ["turmeric", "curcumin", "ayurveda", "health benefits"],
      reading_time: 5,
      publish_date: "2024-01-10"
    },
    {
      id: "3",
      title: "From Corporate to Countryside: The IHA Organics Journey",
      slug: "corporate-to-countryside-iha-journey",
      excerpt: "Learn how two young entrepreneurs left their corporate careers to create India's most ethical organic spice brand in the hills of Sirsi.",
      category: "brand_stories",
      featured_image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=400&fit=crop&crop=center",
      tags: ["brand story", "sustainability", "sirsi", "tribal empowerment"],
      reading_time: 6,
      publish_date: "2024-01-05"
    }
  ];

  const loadPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedPosts = await BlogPost.list('-publish_date');
      // Ensure fetchedPosts is an array and then check its length
      if (Array.isArray(fetchedPosts) && fetchedPosts.length > 0) {
        setPosts(fetchedPosts);
      } else {
        // If no posts are fetched or fetchedPosts is not an array, use default posts
        setPosts(defaultPosts);
      }
    } catch (error) {
      console.error("Error loading blog posts:", error);
      // Fallback to default posts in case of an error during API call
      setPosts(defaultPosts);
    } finally {
      setIsLoading(false);
    }
  }, [defaultPosts]); // Added defaultPosts to dependency array for correctness, though it's a constant.

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const getCategoryColor = (category) => {
    const colors = {
      spice_education: "bg-blue-100 text-blue-800",
      health_benefits: "bg-green-100 text-green-800",
      brand_stories: "bg-amber-100 text-amber-800",
      recipes: "bg-red-100 text-red-800",
      sustainability: "bg-purple-100 text-purple-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-6">Spice Wisdom</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A collection of stories, recipes, and knowledge from the world of spices, 
            brought to you by IHA Organics.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-1/3 mb-4" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-4/5 mb-4" />
                  <Skeleton className="h-8 w-1/2" />
                </CardContent>
              </Card>
            ))
          ) : (
            posts.map(post => (
              <Card key={post.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Fixed the Link 'to' prop to navigate to the correct blog post page */}
                <Link to={createPageUrl('blogPost', { slug: post.slug })} className="cursor-pointer">
                  <div className="overflow-hidden">
                    <img src={post.featured_image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category.replace('_', ' ')}
                      </Badge>
                      <p className="text-sm text-gray-500">{format(new Date(post.publish_date), 'MMM d, yyyy')}</p>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 h-14 overflow-hidden">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">{post.excerpt}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Tag className="w-4 h-4"/>
                        <span>{post.tags.join(', ')}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
