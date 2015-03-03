using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using EventMapper;
using EventMapper.Controllers;
using EventMapper.Models;
using EventMapper.Models.Interfaces;
using Moq;
using NUnit.Framework;

namespace EventMapper.Tests.Controllers
{
    [TestFixture]
    public class SearchControllerTest
    {
        [Test]
        public void Get_With_Search_Params_Returns_Results()
        {
            // Arrange
            var searchTerms = "test search";
            var events = new List<EventItem>();

            var mockEventFinder = new Mock<IEventFinder>();
            mockEventFinder.Setup(
                e => e.Search(It.IsAny<string>()))
                .Returns(events);
            var controller = new SearchController(mockEventFinder.Object);

            // Act
            IEnumerable<EventItem> results = controller.Get(searchTerms);

            // Assert
            mockEventFinder.Verify(e => e.Search(
                It.Is<string>(
                    fn => fn.Equals(searchTerms))));
            Assert.AreSame(events, results);
        }
    }
}
