using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Consume
{
    [ApiController]
    public class ConsumeController : ControllerBase
    {
        [HttpGet("api/consume")]
        public ActionResult<IEnumerable<ConsumeResponse>> GetConsume()
        {
            return Ok(new List<ConsumeResponse>
            {
                new ConsumeResponse
                {
                    Barcode = "0123456",
                    Name = "Frydenlund pilsner",
                    Volume = 50,
                    Percentage = 4.7,
                },
                new ConsumeResponse
                {
                    Barcode = "5678990",
                    Name = "Isbjørn lite",
                    Volume = 50,
                    Percentage = 3.9,
                },
                new ConsumeResponse
                {
                    Barcode = "0123456",
                    Name = "Frydenlund pilsner",
                    Volume = 50,
                    Percentage = 4.7,
                }
            });
        }
    }
}
